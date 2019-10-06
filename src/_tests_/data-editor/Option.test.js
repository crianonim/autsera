import React from "react";
import {render,fireEvent} from "@testing-library/react"
import Option from "../../components/data-editor/Option";

it("renders Option with correct name text",()=>{
    const { getByLabelText }=render(<Option option={{name:"op1"}}/>)
    const input=getByLabelText("Option:")
    expect(input.value).toBe("op1")
})
it("renders Option with correct response text",()=>{
    const { getByLabelText }=render(<Option option={{response:"res1"}}/>)
    const input=getByLabelText("Response:")
    expect(input.value).toBe("res1")
})
it("renders Option with correct correct checkbox value",()=>{
    const { getByLabelText }=render(<Option option={{correct:true}}/>)
    const input=getByLabelText("Correct:")
    expect(input.checked).toBe(true)
})
it("fires setOption when changed name value",()=>{
    const setOption=jest.fn();
    const { getByLabelText }=render(<Option setOption={setOption} option={{name:"op1"}}/>)
    const input=getByLabelText("Option:")
    fireEvent.change(input,{target:{value:"option2"}})
    expect(setOption).toHaveBeenCalledTimes(1);
    expect(setOption).toHaveBeenCalledWith({name:"option2"});
})
it("fires setOption when changed response value",()=>{
    const setOption=jest.fn();
    const { getByLabelText }=render(<Option setOption={setOption} option={{response:"res1"}}/>)
    const input=getByLabelText("Response:")
    fireEvent.change(input,{target:{value:"response2"}})
    expect(setOption).toHaveBeenCalledTimes(1);
    expect(setOption).toHaveBeenCalledWith({response:"response2"});
})
it("fires setOption when changed checkbox correct value",()=>{
    const setOption=jest.fn();
    const { getByLabelText }=render(<Option setOption={setOption} option={{correct:true}}/>)
    const input=getByLabelText("Correct:")
    fireEvent.click(input)
    expect(setOption).toHaveBeenCalledTimes(1);
    expect(setOption).toHaveBeenCalledWith({correct:false});
})