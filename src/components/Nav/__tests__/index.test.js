import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

describe('Nav component', () => {
    //Baseline test
    it('renders', () => {
        render(<Nav />);
    });
    //Snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('about')).toHaveTextContent('About Mei-Ling');
    });
})