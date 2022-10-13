import { ActionPayload, SortAction, SortListProps } from '../types/types';

function SortList({ dispatch }: SortListProps) {
  return (
    <div className="sorting-icons">

      {/* <button onClick={ () => dispatch({ type: SortAction.DIRECTION })}
        > ▲▼ </button> */}

      <button
        type="button"
        onClick={() => dispatch({
          type: SortAction.FIRST_NAME,
          payload: {
            direction: ActionPayload.ASCENDING,
          },
        })}
      >
        FIRST NAME
      </button>

      <button
        type="button"
        onClick={() => dispatch({
          type: SortAction.LAST_NAME,
          payload: {
            direction: ActionPayload.ASCENDING,
          },
        })}
      >
        LAST NAME
      </button>

      <button
        type="button"
        onClick={() => dispatch({
          type: SortAction.AGE,
          payload: {
            direction: ActionPayload.ASCENDING,
          },
        })}
      >
        AGE
      </button>
    </div>
  );
}

export default SortList;
