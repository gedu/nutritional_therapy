import { render } from '@testing-library/react-native';
import React from 'react';
import { NavigationProps } from '../../router';
import { SplashPage } from '../SplashPage';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const mockNavigation = {
  replace: jest.fn(),
} as unknown as NavigationProps['Splash'];

jest.useFakeTimers();

describe('<SplashPage />', () => {
  it('renders correctly', () => {
    render(<SplashPage navigation={mockNavigation} />);
  });
  it('replace navigation should be called after timer runs', () => {
    render(<SplashPage navigation={mockNavigation} />);
    jest.advanceTimersToNextTimer();
    expect(mockNavigation.replace).toBeCalled();
  });
});
