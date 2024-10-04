import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TestComponent = () => {
  const { colors, typography } = useTheme();

  return (
    <div style={{ backgroundColor: colors.primary, color: colors.accent, fontFamily: typography.display }}>
      <h1>Hello from TestComponent</h1>
      <p>This component uses theme context values.</p>
    </div>
  );
};

export default TestComponent;