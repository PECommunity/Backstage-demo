import { TemplateBackstageLogoIcon } from '@backstage/plugin-home';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

export const tools = [
  {
    url: 'https://backstage.io/docs',
    label: '文档',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage',
    label: 'GitHub',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md',
    label: '贡献',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://backstage.io/plugins',
    label: '插件目录',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/issues/new/choose',
    label: '提交新 Issue',
    icon: <TemplateBackstageLogoIcon />,
  },
];
