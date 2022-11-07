import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/My-Cs/__docusaurus/debug',
    component: ComponentCreator('/My-Cs/__docusaurus/debug', 'ad8'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/config',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/config', '3e0'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/content',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/content', 'a44'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/globalData',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/globalData', 'e32'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/metadata',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/metadata', 'd35'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/registry',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/registry', 'c79'),
    exact: true
  },
  {
    path: '/My-Cs/__docusaurus/debug/routes',
    component: ComponentCreator('/My-Cs/__docusaurus/debug/routes', '10d'),
    exact: true
  },
  {
    path: '/My-Cs/markdown-page',
    component: ComponentCreator('/My-Cs/markdown-page', '41d'),
    exact: true
  },
  {
    path: '/My-Cs/',
    component: ComponentCreator('/My-Cs/', 'b68'),
    exact: true
  },
  {
    path: '/My-Cs/',
    component: ComponentCreator('/My-Cs/', '7ab'),
    routes: [
      {
        path: '/My-Cs/intro',
        component: ComponentCreator('/My-Cs/intro', 'd1e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/functions',
        component: ComponentCreator('/My-Cs/python/functions', 'c51'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/Functions-vs-Procedures',
        component: ComponentCreator('/My-Cs/python/Functions-vs-Procedures', 'a2b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/python-conditions',
        component: ComponentCreator('/My-Cs/python/python-conditions', 'd81'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/python-input',
        component: ComponentCreator('/My-Cs/python/python-input', 'a19'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/python-print',
        component: ComponentCreator('/My-Cs/python/python-print', '86a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/python-valid',
        component: ComponentCreator('/My-Cs/python/python-valid', '488'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/symbols',
        component: ComponentCreator('/My-Cs/python/symbols', 'aa5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/python/welcome',
        component: ComponentCreator('/My-Cs/python/welcome', 'ec4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/My-Cs/test',
        component: ComponentCreator('/My-Cs/test', 'c53'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
