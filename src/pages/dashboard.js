import React from 'react';
import { Title } from 'react-admin';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export const Dashboard = () => (
  <Card>
    <Title title="Min's React-Admin." />
    <CardHeader title="Welcome to administration"/>
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);
