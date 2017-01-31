import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import GridList from './GridList';
import GridTile from './GridTile';
import IconButton from '../IconButton';
import StarBorder from '../svg-icons/toggle/star-border';

const tilesData = [
  {
    img: '/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: '/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

storiesOf('GridList', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        }}>
            <GridList
                cols={number('Cols', 2)}
                cellHeight={number('Cell Height', 200)}
                padding={number('Padding', 1)}
                style={{
                    width: number('Width', 500),
                    height: number('Height', 450),
                    overflowY: 'auto',
                }}
            >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
                    actionPosition='left'
                    titlePosition='top'
                    titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
                    cols={tile.featured ? 2 : 1}
                    rows={tile.featured ? 2 : 1}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
            </GridList>
        </div>
    </div>
  ));
