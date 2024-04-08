import { Meta, moduleMetadata } from '@storybook/angular';
import { StoryCardComponent } from './story-card.component';

import { DatePipe, NgOptimizedImage, registerLocaleData } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StoryCardSkeletonComponent } from '../story-card-skeleton/story-card-skeleton.component';
import { StoryEditionDateLabelComponent } from '../story-edition-date-label/story-edition-date-label.component';

// Localización
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es-419';
registerLocaleData(localeEs);

// Modelos
import { Publication } from '@models/storylist.model';
import { Story, StoryCard } from '@models/story.model';

export default {
	title: 'StoryCardComponent',
	component: StoryCardComponent,
	decorators: [
		moduleMetadata({
			imports: [NgOptimizedImage, NgxSkeletonLoaderModule, StoryCardSkeletonComponent, StoryEditionDateLabelComponent],
			providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-419' }],
		}),
	],
} as Meta<StoryCardComponent>;

const publication: Publication<StoryCard> = {
	publishingOrder: 60,
	published: true,
	publishingDate: '2022-03-01',
	story: {
		id: 1,
		language: 'Español',
		approximateReadingTime: 4,
		author: {
			id: '1',
			nationality: {
				country: 'Argentina',
				flag: 'https://cdn.sanity.io/images/s4dbqkc5/production/ee6f30199738f983516909a0d6330301573a62f6-32x20.png',
			},
			imageUrl: 'https://cdn.sanity.io/images/s4dbqkc5/production/c91d9010f27d5078ef787cb231395042b66db2cd-400x400.jpg',
			name: 'Alejandro Dolina',
		},
		slug: 'mascaras',
		title: 'Máscaras',
		media: [],
		summary: [
			{
				_key: '7eddf102184a',
				markDefs: [],
				children: [
					{
						_type: 'span',
						marks: ['strong', 'em'],
						text: 'Máscaras',
						_key: 'f043f548f8c4',
					},
					{
						_type: 'span',
						marks: [],
						text: ' está incluido en el volumen ',
						_key: '7b11663f0e03',
					},
					{
						text: 'Bar del Infierno',
						_key: '3ddad9aa76c3',
						_type: 'span',
						marks: ['em'],
					},
					{
						_type: 'span',
						marks: [],
						text: ', publicado en 2005. La acción de la obra se sucede en un bar del cual no es posible salir, dado que en el universo del libro el afuera no existe. En este escenario, El Narrador de Historias, protagonista principal de esta narración enmarcada, procede a contar una variedad de relatos ubicados en distintos lugares y distintas épocas.',
						_key: 'afc1b9c43d8c',
					},
				],
				_type: 'block',
				style: 'normal',
			},
		],
		paragraphs: [
			{
				style: 'normal',
				_key: '01d31f77e38e',
				markDefs: [],
				children: [
					{
						text: 'Según cuentan algunos, el corso de la avenida La Plata, en Santos Lugares, era utilizado frecuentemente por ángeles y demonios cuando tenían que cumplir alguna misión terrestre. Solía decirse también que entre todas las máscaras del corso, una era el diablo. Los hechiceros de Lourdes y Villa Lynch aprovechaban aquellas jornadas para suscribir convenios de toda clase con los poderes de las tinieblas. Tras las caretas espeluznantes se ocultaba el verdadero horror de las caras del mal.',
						_key: '47950aa594a0',
						_type: 'span',
						marks: [],
					},
				],
				_type: 'block',
			},
			{
				_key: '4f7a3a195535',
				markDefs: [],
				children: [
					{
						_type: 'span',
						marks: [],
						text: 'Los hombres sensibles de Flores solían pasearse por allí tratando de reconocer el sello de las legiones, o bien gritando frases ingeniosas en el oído de las muchachas. Cada vez que sospechaban el carácter sobrenatural de algún enmascarado, comenzaban a acosarlo tratando de provocar alguna reacción reveladora.',
						_key: '2510774b3b10',
					},
				],
				_type: 'block',
				style: 'normal',
			},
			{
				markDefs: [],
				children: [
					{
						_type: 'span',
						marks: [],
						text: 'Nunca tuvieron suerte. Las mascaritas eran muy diestras en la ocultación de investiduras infernales o eran, lisa y llanamente, sifoneros o ferroviarios disfrazados de Mandinga.',
						_key: 'e863deeabe34',
					},
				],
				_type: 'block',
				style: 'normal',
				_key: '90005bcd4cee',
			},
		],
		prologues: [],
	},
};

export const Historia = {
	render: (args: StoryCardComponent) => ({
		props: args,
		template: `
      <div class="grid grid-cols-3 gap-4">
          <cuentoneta-story-card
              [editionPrefix]="editionPrefix" 
              [editionSuffix]="editionSuffix" 
              [displayDate]="displayDate" 
              [editionIndex]="editionIndex" 
              [publication]="publication1">
          </cuentoneta-story-card>
          <cuentoneta-story-card
              [editionPrefix]="editionPrefix" 
              [editionSuffix]="editionSuffix" 
              [displayDate]="displayDate" 
              [editionIndex]="editionIndex" 
              [publication]="publication2">
          </cuentoneta-story-card>
          <cuentoneta-story-card
              [editionPrefix]="editionPrefix" 
              [editionSuffix]="editionSuffix" 
              [displayDate]="displayDate" 
              [editionIndex]="editionIndex" 
              [publication]="publication3">
          </cuentoneta-story-card>
    </div>
`,
	}),
	args: {
		editionPrefix: 'Episodio',
		editionSuffix: '',
		displayDate: false,
		editionIndex: 0,
		publication1: publication,
		publication2: { ...publication, published: false },
		publication3: null,
	},
};

export const Cargando = {
	render: (args: StoryCardComponent) => ({
		props: args,
	}),
	args: {
		editionPrefix: 'Episodio',
		editionSuffix: '',
		displayDate: false,
		editionIndex: 0,
		publication: null,
	},
};
