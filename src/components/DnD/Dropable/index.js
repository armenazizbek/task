import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPros} from '../../../selectors/pros';
import {getCons} from '../../../selectors/cons';
import { PROS } from '../../../configs/env-vars';
import { addPros, removePros } from '../../../actions/pros';
import { addCons, removeCons } from '../../../actions/cons';

export default ({children, id}) => {
  const pros = useSelector(getPros);
  const cons = useSelector(getCons);
  const dispatch = useDispatch();

  const onDrop = (e) => {
    e.preventDefault();

    /** getting data when drag is over */
    const data = e.dataTransfer.getData('transfer');

    /** getting type and index */
    const [ type, index ] = data.split('_');
    const indexNumber = parseInt(index, 0);

    /** moving from one column to another */
    if(type === PROS) {
      dispatch(addCons({text: pros[index].text}));
      dispatch(removePros({index: indexNumber}));
      return;
    }
    dispatch(addPros({text: cons[index].text}));
    dispatch(removeCons({index: indexNumber}));
  };

  const onDragOver = (e) => {
      e.preventDefault();
  };

  return <div id={id} onDrop={onDrop} onDragOver={onDragOver}>
      {children}
  </div>
};
