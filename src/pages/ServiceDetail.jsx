import React, { useEffect, useRef, useState, cloneElement, isValidElement } from 'react';

/**
 * Fades + slides an element into view the first time it scrolls into the
 * viewport (the "text appears as you scroll" effect, like apple.com).
 *
 * Usage:
 *   <Reveal><h2 className="section-heading">Title</h2></Reveal>
 *   <Reveal delay={120}><p>Some text</p></Reveal>
 *
 * If `children` is a single element (the usual case), Reveal attaches the
 * scroll behavior directly to it instead of wrapping it in an extra <div> —
 * this keeps CSS grid/flex layouts (e.g. service cards) working exactly as
 * before, since no wrapper node is inserted between a grid and its items.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If the browser doesn't support IntersectionObserver, just show the
    // content immediately rather than leaving it invisible.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass = `reveal${visible ? ' is-visible' : ''}`;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (isValidElement(children)) {
    return cloneElement(children, {
      ref,
      className: [children.props.className, revealClass].filter(Boolean).join(' '),
      style: { ...(children.props.style || {}), ...style },
    });
  }

  return (
    <Tag ref={ref} className={[className, revealClass].filter(Boolean).join(' ')} style={style}>
      {children}
    </Tag>
  );
}
