import React from 'react';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const NotFound = () => (
  <Card>
    <Title title="Not Found" />
    <CardContent>
      <h1>404: Page not found</h1>
    </CardContent>
  </Card>
);
