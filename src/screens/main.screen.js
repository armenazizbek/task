import React from 'react';
import {useSelector} from 'react-redux';
import { getCons } from '../selectors/cons';
import { getPros } from '../selectors/pros';
import { PROS, CONS } from '../configs/env-vars';
import {
    addPros,
    removePros,
    changePros,
} from '../actions/pros';
import {
    addCons,
    removeCons,
    changeCons,
} from '../actions/cons';
import List from '../components/List';
import Dropable from '../components/DnD/Dropable';
import Header from '../components/Header';
import Column from '../components/Column';

export default () => {
    const pros = useSelector(getPros);
    const cons = useSelector(getCons);

    return <div className='main'>
        <div className='flex-container'>
            <div className='content'>
                <Header />
                <div className='row'>
                    <Column title='PROS'>
                        <Dropable id={PROS}>
                            <List items={pros} add={addPros} change={changePros} remove={removePros} type={PROS}/>
                        </Dropable>
                    </Column>
                    <Column title='CONS' leftBorder>
                        <Dropable id={CONS}>
                            <List items={cons} add={addCons} change={changeCons} remove={removeCons} type={CONS}/>
                        </Dropable>
                    </Column>
                </div>
            </div>
        </div>
    </div>;
};
