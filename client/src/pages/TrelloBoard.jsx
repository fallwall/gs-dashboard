import React from 'react';
import Board from 'react-trello';
import './TrelloBoard.css';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Points of Interests',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Museum of Food & Drinks', description: 'Can AI make memes', label: 'Williamsburg', draggable: false },
        { id: 'Card2', title: 'Polka Dot', description: 'Polish comfort food', label: 'Greenpoint', draggable: false },
        { id: 'Card4', title: 'Martha\'s Country Bakery', description: 'Pies and cakes', label: 'Williamsburg', metadata: { sha: 'be312a1' } }
      ]
    },
    {
      id: 'lane2',
      title: '8 Apr - Wed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: '9 Apr - Thu',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane4',
      title: '10 Apr - Fri',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane5',
      title: '11 Apr - Sat',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane6',
      title: '12 Apr - Sun',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane7',
      title: '13 Apr - Mon',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane8',
      title: '14 Apr - Tue',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane9',
      title: '15 Apr - Wed',
      label: '0/0',
      cards: []
    }
  ]
}

const TrelloBoard = (props) => {
  return (
    <div className="App">
      begins.
      <Board data={data} />
    </div>
  );
}

export default TrelloBoard;