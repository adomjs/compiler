const compileAndCreate = require('../compileAndCreate');

const element = compileAndCreate(
	`<template a-for="elem of list">{{ elem }}</template>`
);

it('render', () => {
	element.setState({
		list: ['Hello ', 'World']
	});

	expect(element.innerHTML).toMatchSnapshot();
});

it('remove elements', () => {
	element.setState({
		list: ['Hello']
	});

	expect(element.innerHTML).toMatchSnapshot();
});
