import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ShowerDesignDetail from './ShowerDesignDetail.jsx';
import RailingDesignDetail from './RailingDesignDetail.jsx';

// Single route target for /services/:slug/:designSlug. Different services
// have their own "typical designs" detail page component (each with its own
// content shape in data.js), so this just looks at the top-level :slug and
// hands off to the right one. Add a new `if` here when a third service gets
// its own set of dedicated design pages.
export default function ServiceDesignDetail() {
  const { slug } = useParams();

  if (slug === 'frameless-shower-enclosures') {
    return <ShowerDesignDetail />;
  }
  if (slug === 'glass-railings') {
    return <RailingDesignDetail />;
  }
  return <Navigate to="/services" replace />;
}
