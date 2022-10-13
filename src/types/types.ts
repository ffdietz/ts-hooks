import { ReactNode, Dispatch } from 'react';

export type ApiRequest = {
  results: User[];
  info:
  {
    'seed': string,
    'results': number,
    'page': number,
    'version': string
  }
};

export type User = {
  'gender': string,
  'name': {
    'title': string,
    'first': string,
    'last': string
  },
  'location': {
    'street': {
      'number': number,
      'name': string
    },
    'city': string,
    'state': string,
    'country': string,
    'postcode': number,
    'coordinates': {
      'latitude': string,
      'longitude': string
    },
    'timezone': {
      'offset': string,
      'description': string
    }
  },
  'email': string,
  'login': {
    'uuid': string,
    'username': string,
    'password': string,
    'salt': string,
    'md5': string,
    'sha1': string,
    'sha256': string
  },
  'dob': {
    'date': string,
    'age': number
  },
  'registered': {
    'date': Date,
    'age': number
  },
  'phone': string,
  'cell': string,
  'id': {
    'name': string,
    'value': string
  },
  'picture': {
    'large': string,
    'medium': string,
    'thumbnail': string
  },
  'nat': string
};

export type UsersListProps = {
  users: User[];
};

export type UserCardProps = {
  user: User;
};

// useContext
export type FilterContextType = {
  filterUser: string;
  setFilter: (filter: string) => void;
};

export type FilterProviderProps = {
  children: ReactNode | ReactNode[]
};

// useReducer
export type State = {
  users: User[];
};

export enum SortAction {
  DIRECTION = 'DIRECTION',
  FIRST_NAME = 'FIRST_NAME',
  LAST_NAME = 'LAST_NAME',
  AGE = 'AGE',
  NAT = 'NAT',
  USER = 'USERNAME',
}

export enum ActionPayload {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}

export type Action = {
  type: SortAction,
  payload?: {
    direction?: ActionPayload
  }
};

export type SortListProps = {
  dispatch: Dispatch<Action>
};
