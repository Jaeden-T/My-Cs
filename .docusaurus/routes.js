import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/My-Cs/', '3aa'),
    routes: [
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
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
