"use client"

import translate from "@/actions/translate";
import { TranslationLanguages } from "@/app/translate/page";
import { useFormState } from "react-dom";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"





const initialState = {
  inputLanguage: "auto",
  input: "",
  outputLanguage: "es",
  output: "",
};




function TranslationForm({ languages }: { languages: TranslationLanguages }) {
  const [state, formAction] = useFormState(translate, initialState);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <form action={formAction}>
        <div>
        <Select name="inputLanguage" defaultValue="auto">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Want us to figure out?</SelectLabel>

              <SelectItem key="auto" value="auto">
                Auto-detection
              </SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Language</SelectLabel>

              {Object.entries(languages.translation).map(([key, value]) => (
                <SelectItem key={key} value={key}> 
                  {value.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <textarea 
           className="min-h-32 text-xl bg-gray-50 border-none"
          placeholder="Type your message here..."
          name="input"
          value={input}
          onChange={(e) => {setInput(e.target.value);
          }}
        />
        </div>

        <div>
        <Select name="outputLanguage" defaultValue="es">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Want us to figure out?</SelectLabel>

              <SelectItem key="auto" value="auto">
                Auto-detection
              </SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Language</SelectLabel>

              {Object.entries(languages.translation).map(([key, value]) => (
                <SelectItem key={key} value={key}> 
                  {value.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <textarea 
          className="min-h-32 text-xl bg-gray-50 border-none"
          placeholder="Translation will appear here..."
          name="output"
          value={output}
          onChange={(e) => {setOutput(e.target.value)
          }}
        />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TranslationForm;
