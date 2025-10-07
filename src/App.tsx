import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Outbox from './components/Outbox';
import Inbox from './components/Inbox';
import IdempotencyKeys from './components/IdempotencyKeys';
import AdminAuditLog from './components/AdminAuditLog';
import ServiceConfig from './components/ServiceConfig';
import FeatureFlags from './components/FeatureFlags';
import AuthProviders from './components/AuthProviders';
import Roles from './components/Roles';
import UserRoleAssignments from './components/UserRoleAssignments';
import Permissions from './components/Permissions';
import RolePermissionAssignments from './components/RolePermissionAssignments';
import AuthSessions from './components/AuthSessions';
import SecurityEvents from './components/SecurityEvents';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Auth Service
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Outbox />
          <Inbox />
          <IdempotencyKeys />
          <AdminAuditLog />
          <ServiceConfig />
          <FeatureFlags />
          <AuthProviders />
          <Roles />
          <UserRoleAssignments />
          <Permissions />
          <RolePermissionAssignments />
          <AuthSessions />
          <SecurityEvents />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
