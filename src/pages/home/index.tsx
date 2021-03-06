<<<<<<< HEAD
import React, { useState } from 'react';

import { usePow, useCreation } from '@/hooks';
import './index.less';

/* Make all properties in T optional */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/* Make all properties in T required */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

interface IPerson {
  name?: string;
  age?: number;
  height?: number;
}

const person: Partial<IPerson> = {
  name: 'zhangsan'
};

const person2: Required<IPerson> = {
  name: 'lisi',
  age: 20,
  height: 176,
};

console.log('person======', person);

export default function Home(): JSX.Element {
  const [flag, setFlag] = useState<boolean>(false);
  const data = usePow([1, 2, 3]);

  const getNewData = () => {
    return Math.random();
  };

  const nowData = useCreation(() => getNewData(), []);

  return <>
    <span>这是第一句话</span>&nbsp;&nbsp;<span className="decoration">这是第二句话</span>
    <div>这是第三句话</div>
    <div>这是第四句话</div>
    <section>
      <p data-clstag="hello">父元素设置text-decoration: dashed underline;</p>
      <p>子元素设置text-decoration: wavy overline;</p>
    </section>
    <section>
      <div>数字：{JSON.stringify(data)}</div>
      <button onClick={() => { setFlag(v => !v); }}>切换</button>
      <div>切换状态：{JSON.stringify(flag)}</div>
    </section>
    <section>
      <div>正常函数：{getNewData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <button onClick={() => { setFlag(v => !v); }}>渲染</button>
    </section>
  </>;
=======
import React,{ useMemo, useState } from 'react';

type DimentionOpt = {
  propId: string;
  propName: string;
};

let index = 0;

export default function Home(): JSX.Element {
  const [chosenDimentionOpts,setChosenDimentionOpts] = useState<DimentionOpt[]>([]);
  const opts = useMemo(() => {
    const optArr = chosenDimentionOpts.map((el:DimentionOpt) => el.propId);
    return optArr;
  },[chosenDimentionOpts]);

  const handleAddDimension = ():void => {
    const item: DimentionOpt = {
      propId: String(index),
      propName: `hello${index}`
    };
    setChosenDimentionOpts([...chosenDimentionOpts,item]);
    index ++;
  };
  return <div>
    <ol>
      {
        opts.map((item:string) => {
          return <li key={item}>{item}</li>;
        })
      }
    </ol>
    <button onClick={handleAddDimension}>Click to add dimension</button>
  </div>;
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29
}
