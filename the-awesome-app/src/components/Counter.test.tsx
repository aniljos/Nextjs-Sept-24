import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';


it("Counter 1", () => {

    render(<Counter initialValue={15}/>);
    const content = screen.getByText("Counter: 15");
    expect(content).toBeInTheDocument();
    
})

it("Counter 1", () => {

    render(<Counter initialValue={15}/>);
    const content = screen.getByText("Counter: 15");
    expect(content).toBeInTheDocument();
    const incBtn = screen.getByText("Inc");
    fireEvent.click(incBtn);
    const updatedContent = screen.getByText("Counter: 16");
    expect(updatedContent).toBeInTheDocument();
    
})