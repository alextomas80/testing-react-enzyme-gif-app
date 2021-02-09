import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({
	defaultCategories = ['dogs', 'the office', 'homer', 'spiderman'],
}) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<AddCategory setCategories={setCategories} />
			<hr />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
