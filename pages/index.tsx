'use client';
import PrimaryLayout from '@layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import * as React from 'react';
import { Item } from '@lib/interfaces';
import itemApi from '@lib/api/item';
import { useState, useEffect } from 'react';

const Index: NextPageWithLayout = ({}) => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([] as Item[]);

  useEffect(() => {
    itemApi
      .readAll()
      .then((i) => {
        console.log('Read all items: ', i);
        setItems(i);
      })
      .catch((e) => {
        console.error('Error fetching items: ', e);
      });
  }, []);

  return (
    <>
      <div className={'flex flex-col justify-center items-center min-h-screen'}>
        <section className={'text-center'}>
          <span className={'text-4xl'}>Fullstack Next.js Example</span>
          <p className={'text-lg'}>
            This form will create an item in the database with a name of your
            choice.
          </p>
          <input
            className={'border rounded p-2'}
            type={'text'}
            placeholder={'Item Name'}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />

          <button
            className={
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            }
            onClick={async () => {
              const item = await itemApi
                .create({
                  name: name,
                })
                .then((i) => {
                  setItems([...items, i]);
                  setName('');
                  return i;
                })
                .catch((e) => {
                  console.error('Error creating item: ', e);
                });
              console.log(item);
            }}
          >
            Create Item
          </button>
          <p className={'text-lg'}>
            This is the list of items from the database.
          </p>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
