import React from 'react';
import DocCardList from '@theme/DocCardList';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

export default function FilteredDocCardList() {
  // For now, let's manually specify the items we want to show
  // This excludes the first category (Tutorial Basics) and shows the rest
  const items: PropSidebarItem[] = [
    {
      type: 'category',
      label: 'System Setup',
      href: '/docs/system-setup',
      description: 'Configure your FRC robot systems and hardware',
      collapsed: false,
      collapsible: true,
      items: [], // Required for category type
    },
    // Add other categories here as they are created
  ];
  
  return <DocCardList items={items} />;
}