import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id'?: string;
        'publishable-key'?: string;
        children?: React.ReactNode;
      };
    }
  }
}
