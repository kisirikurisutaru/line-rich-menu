'use client'

import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

type Action = {
  type: string;
  data?: string;
  richMenuAliasId?: string;
  label?: string;
  text?: string;
  uri?: string;
};

type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Area = {
  bounds: Bounds;
  action: Action;
};

type RichMenu = {
  richMenuId: string;
  name: string;
  size: {
    width: number;
    height: number;
  };
  chatBarText: string;
  selected: boolean;
  areas: Area[];
};

type Alias = {
  richMenuAliasId: string;
  richMenuId: string;
};

type IdsContextType = [RichMenu[], Dispatch<SetStateAction<RichMenu[]>>, Alias[], Dispatch<SetStateAction<Alias[]>>];

export const IdsContext = createContext<IdsContextType | undefined>(undefined);

export const MyProvider = ({children} : {children: ReactNode}) => {
  const [ menuIds, setMenuIds ] = useState<RichMenu[]>([]);
  const [ aliasIds, setAliasIds ] = useState<Alias[]>([]);

  return (
    <IdsContext.Provider value={[ menuIds, setMenuIds, aliasIds, setAliasIds ]}>
      {children}
    </IdsContext.Provider>
  );
};

