import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
	const category = 'Bart Simpson';

	test('debe de mostrarse correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://xxx/cualquier/cosa.jpg',
				title: 'Una cosa',
			},
			{
				id: '123',
				url: 'https://xxx/cualquier/cosa.jpg',
				title: 'Otra cosa',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
