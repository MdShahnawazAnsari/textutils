import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const convertUp = () => {
    setText(text.toUpperCase())
    props.showAlert("Text converted to Upper Case!", "success")
  };
  const convertLow = () => {
    setText(text.toLowerCase())
    props.showAlert("Text converted to Lower Case!", "success")
  };

  const reverseWord = () => {
    setText(text.split(' ').reverse().join(' '))
    props.showAlert("Word has been Reversed!", "success")
  }

  const reverseChar = () => {
    setText(text.split('').reverse().join(''))
    props.showAlert("Charecters has been Reversed!", "success")
  }

  const camelCase = () => {
    let newArr = [];
    // setText(text.toLowerCase())
    text.split(' ').map(item => {
      if (/[a-z]/ig.test(item)) {
        if (/[a-z]/i.test(item[0])) {
          newArr.push(item.replace(item[0], item[0].toUpperCase()))
        } else {
          newArr.push(item)
        }
      }
      return null
    })

    setText(newArr.join(' '))
    props.showAlert("Text converted into Camel Case!", "success")
  }

  const clear = () => {
    setText('')
    props.showAlert("Text Cleared!", "success")
  };

  return (
    <>
      <div className="container py-4" style={{ background: props.mode === 'light' ? props.color.whiteBackground : props.color.blueBackground, color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}>
        <div>
          <h1>Type or paste The text to Analyze</h1>
          <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} placeholder="Type here" rows={6} style={{ background: props.mode === 'light' ? props.color.whiteBackground : props.color.lightBlueBackground, color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}></textarea>
          </div>
        </div>
        <div>
          <button className="btn btn-primary mx-2 my-2" onClick={convertUp}>UpperCase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={convertLow}>LowerCase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={reverseWord}>Reverse Words</button>
          <button className="btn btn-primary mx-2 my-2" onClick={reverseChar}>Reverse Charecters</button>
          <button className="btn btn-primary mx-2 my-2" onClick={camelCase}>Camel Case</button>
          <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear</button>
        </div>
        <div className="container">
          <h5>Total words are {text.split(' ').length} and Charecters are {text.length}</h5>
        </div>
        <div className="container">
          <h3>Preview</h3>
          <div className="container py-4" style={{ border: "1px solid gray" }}>
            {text.length > 0 ? text : 'Write somehing in the text box to preview'}
          </div>
        </div>
      </div>
    </>
  )
}
