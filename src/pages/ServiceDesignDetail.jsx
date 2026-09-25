import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ShowerDesignDetail from './ShowerDesignDetail.jsx';
import RailingDesignDetail from './RailingDesignDetail.jsx';
import WineDesignDetail from './WineDesignDetail.jsx';
import PartitionDesignDetail from './PartitionDesignDetail.jsx';
import MirrorDesignDetail from './MirrorDesignDetail.jsx';

// Single route target for /services/:slug/:designSlug. Different services
// have their own "typical designs" detail page component (each with its own
// content shape in data.js), so this just looks at the top-level :slug and
// hands off to the right one. Add a new `if` here when another service gets
// its own set of dedicated design pages.
export default function ServiceDesignDetail() {
  const { slug } = useParams();

  if (slug === 'frameless-shower-enclosures') {
    return <ShowerDesignDetail />;
  }
  if (slug === 'glass-railings') {
    return <RailingDesignDetail />;
  }
  if (slug === 'wine-cellars') {
    return <WineDesignDetail />;
  }
  if (slug === 'commercial-glazing-office-partitions') {
    return <PartitionDesignDetail />;
  }
  if (slug === 'mirrors') {
    return <MirrorDesignDetail />;
  }
  return <Navigate to="/services" replace />;
}
