import React from 'react';
import Container from '@mui/material/Container';




function PageContainer({ children }) {
    return <Container className="page-container" maxWidth="lg">{children}</Container>;
}

export default PageContainer
