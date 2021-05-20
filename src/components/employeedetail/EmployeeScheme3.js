import React, { useState, useRef } from "react";
import Controls from "../controls/Controls";
import { Avatar, Grid } from "@material-ui/core";
//import useStyles from "./EmployeeDetailStyles";
import * as employeeMockData from "../../pages/employees/mockData/mockData";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/styles";
import { labels } from "../../common/labelsList";
import { Form as FormikForm } from "@components/common";

const useStyles = makeStyles((theme) => ({
  schemeUl: {
    listStyleType: "none",
    listStylePosition: "inside",
    margin: 0,
    padding: 0,
    //listStyle: "none",
    // display: "flex",
    // marginTop: "20px",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // height: "240px",
    // alignContent: "flex-start",
  },
  schemeGrid: {
    display: "flex",
    marginTop: "20px",
    paddingRight: "28px",
  },
  // schemeBox: {
  //   flex: "0 0 300px",
  //   width: "300px",
  //   marginRight: "20px",
  //   display: "flex",
  //   justifyContent: "space-around",
  // },
  schemeAvatar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#2D9FC3",
    marginRight: "23px",
  },
}));

const EmployeeScheme = (props) => {
  const { handleInputChange, values } = props;
  const classes = useStyles();
  const [schemeMpf, setSchemeMpf] = useState(
    employeeMockData.getScheme_per_Employee()
  );

  const schemelength = useRef(schemeMpf.length);
  const isSelected = useRef(false);

  const [selectData, setSelectData] = useState();
  //employeeMockData.getScheme_per_Employee()

  const onHandleChange = (key, value) => {
    //const selected = value.target.name;
    setSelectData({
      ...selectData,
      [key]: value,
    });
  };

  const loadSelectedChange = () => {
    if (!isSelected.current) {
      for (let [key, value] of Object.entries(schemeMpf)) {
        //console.log(key, value);
        //console.log(`Select${value.id}`, value);
        //console.log(selectData);
        onHandleChange(`Select${value.id}`, value);
      }
    }
    isSelected.current = true;
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(schemeMpf);

    let x = result.destination.index,
      y = result.source.index;
    items[x] = items.splice(y, 1, items[x])[0];

    setSchemeMpf(items);
  }

  // return (
  //   <>
  //     <div className={classes.labels}>{labels.schemeTitle}</div>
  //     <DragDropContext onDragEnd={handleOnDragEnd}>
  //       <Droppable droppableId="characters">
  //         {(provided) => (
  //           <ul
  //             className={classes.schemeUl}
  //             {...provided.droppableProps}
  //             ref={provided.innerRef}
  //           >
  //             {schemeMpf.map(({ id, name }, index) => {
  //               //console.log("scheme", schemelength, index);
  //               // if (index === schemelength.current - 1) {
  //               //   //console.log("callback");
  //               //   loadSelectedChange();
  //               // }
  //               return (
  //                 <Draggable key={id} draggableId={id} index={index}>
  //                   {(provided) => (
  //                     <li
  //                       key={id}
  //                       ref={provided.innerRef}
  //                       {...provided.draggableProps}
  //                       {...provided.dragHandleProps}
  //                     >
  //                       <div className={classes.schemeBox}>
  //                         <Grid
  //                           item
  //                           sm={7}
  //                           xs={12}
  //                           className={classes.schemeGrid}
  //                         >
  //                           {/* {console.log(
  //                 selectData[index].value
  //                 //selectData[`Select${id}`]
  //               )} */}
  //                           <Avatar className={classes.schemeAvatar}>
  //                             {id}
  //                           </Avatar>
  //                           <FormikForm.Select2
  //                             //name={`LSP_SP_offect_sequence_${id}`}
  //                             name={schemeMpf[index].value}
  //                             //name={selectData[`Select${id}`]}
  //                             onChange={(val) =>
  //                               onHandleChange(`Select${id}`, val)
  //                             }
  //                             // onChange={(val) =>
  //                             //   onHandleChange(selectData[index].value, val)
  //                             // }
  //                             //value={schemeMpf[index].value}
  //                             value={schemeMpf[`Select${id}`]}
  //                             options={employeeMockData.getScheme_LSP_SP_offect_sequence()}
  //                           />
  //                         </Grid>
  //                       </div>
  //                       <p>{name}</p>
  //                     </li>
  //                   )}
  //                 </Draggable>
  //               );
  //             })}
  //             {provided.placeholder}
  //           </ul>
  //         )}
  //       </Droppable>
  //     </DragDropContext>
  //   </>
  // );
};

export default EmployeeScheme;
