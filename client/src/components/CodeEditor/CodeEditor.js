import React,{useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import { useWindowSize } from "../../Hook/windowSize";
const CodeEditor = ({ theme, code, setCode, language }) => {
	function handleEditorDidMount(editor, monaco) {
		editor.updateOptions({
			// lineNumbers: "off",
			fontSize: "16px",
			mouseWheelZoom: true,
		});
		console.log(monaco.editor.EditorOption);
	}
	const { width } = useWindowSize();
	const [height,setHeight] = useState("95vh");

	useEffect(() => {
    if(width>768){
			setHeight("95vh");// vh hi use karo warna verticle height me dikkat aaigi
		}else{
			setHeight("55vh");
		}
  }, [width]);
	return (
		<Editor
			height={height}
			width={`100%`}
			language={
				(language === "py"
					? "python"
					: language === "js"
					? "javascript"
					: "cpp") || "cpp"
			}
			value={code}
			theme={theme}
			className="text-3xl"
			defaultValue="//Code must be return in appropriate language to avoid api clash"
			onMount={handleEditorDidMount}
			onChange={(value) => setCode(value)}
		/>
	);
};

export default CodeEditor;
