import React from 'react'
import { loadState } from '../../data/lib/storage';

export const ElektronKitob = () => {
  const token = loadState("user");

  return (
    <div>
      <img
        className="w-[300px] h-[300px] rounded-full bg-slate-500 flex justify-center items-center relative"
        src={token.user.foto}
        alt=""
      />
    </div>
  );
};
