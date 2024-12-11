import {
  Button,
  TreeGrid,
  TreeGridRow,
  TreeGridCell,
  onSelect,
  onMove,
} from "@wordpress/components";

function TreeMenu() {
  return (
    <TreeGrid>
      <TreeGridRow level={1} positionInSet={1} setSize={2}>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onSelect} {...props}>
              Select
            </Button>
          )}
        </TreeGridCell>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onMove} {...props}>
              Move
            </Button>
          )}
        </TreeGridCell>
      </TreeGridRow>
      <TreeGridRow level={1} positionInSet={2} setSize={2}>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onSelect} {...props}>
              Select
            </Button>
          )}
        </TreeGridCell>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onMove} {...props}>
              Move
            </Button>
          )}
        </TreeGridCell>
      </TreeGridRow>
      <TreeGridRow level={2} positionInSet={1} setSize={1}>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onSelect} {...props}>
              Select
            </Button>
          )}
        </TreeGridCell>
        <TreeGridCell>
          {(props) => (
            <Button onClick={onMove} {...props}>
              Move
            </Button>
          )}
        </TreeGridCell>
      </TreeGridRow>
    </TreeGrid>
  );
}

export default TreeMenu;
