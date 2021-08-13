import { render, screen } from '@testing-library/react';
import Recipe from '../components/Recipe';

test('it renders a Recipe', () => {
    const data = {
        name: 'name',
        description: 'desc',
        ingredients: [
            {name: 'ing1'},
            {name: 'ing2'},
        ]
    };
    const nameText = `Name: ${data.name}`;
    const descText = `Description: ${data.description}`;
    render(<Recipe data={data} />);

    const nameElement = screen.getByText(nameText);
    expect(nameElement).toBeInTheDocument();

    const descElement = screen.getByText(descText);
    expect(descElement).toBeInTheDocument();

    const ing1lement = screen.getByText(data.ingredients[0].name);
    expect(ing1lement).toBeInTheDocument();

    const ing2lement = screen.getByText(data.ingredients[1].name);
    expect(ing2lement).toBeInTheDocument();
});
