import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import ISong from "../../types/songTypes";
import SongRow from "../songRow/SongRow";

export const DraggableList = ({
  songList,
  setSongList,
}: {
  songList: ISong[];
  setSongList: (songList: ISong[]) => void;
}) => {
  const handleDrag = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) {
      return;
    }
    const isSourceComesBeforeDestination = source.index < destination.index;

    const smallestIndex = isSourceComesBeforeDestination
      ? source.index
      : destination.index;

    const biggestIndex = isSourceComesBeforeDestination
      ? destination.index
      : source.index;

    const firstElement = isSourceComesBeforeDestination
      ? songList[destination.index]
      : songList[source.index];

    const secondElement = isSourceComesBeforeDestination
      ? songList[source.index]
      : songList[destination.index];
    // Todo birefly explain what do the next lines do
    const newList = [
      ...songList.slice(0, smallestIndex),
      firstElement,
      ...songList.slice(smallestIndex + 1, biggestIndex),
      secondElement,
      ...(biggestIndex === songList.length - 1
        ? []
        : songList.slice(Math.min(biggestIndex + 1))),
    ];
    setSongList(newList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="DroppableId">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {songList.map((song, index) => (
                <Draggable
                  draggableId={song.trackNumber.toString()}
                  index={index}
                  key={song.trackNumber.toString()}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SongRow song={song} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableList;
