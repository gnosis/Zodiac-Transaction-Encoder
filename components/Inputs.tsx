import * as React from 'react'

import StackableContainer from './StackableContainer'
import { FunctionFragment } from '@ethersproject/abi'
import { inputId, isInputValid, InputValueMap } from './Encoder'

type Props = {
  fn: FunctionFragment
  inputValues: InputValueMap
  onChange(id: string, value: string, isValid: boolean): void
}

const Inputs = ({ fn, inputValues, onChange }: Props) => (
  <>
    <ul>
      {fn.inputs.map((input, i) => {
        const id = inputId(fn, input, i)
        const error = inputValues[id]?.value && !inputValues[id]?.isValid
        return (
          <li key={id}>
            <StackableContainer lessMargin lessPadding lessRadius>
              <label htmlFor={id}>
                {input.name || 'Input'} ({input.type})
              </label>
              <input
                type="text"
                id={id}
                name={input.name}
                data-input-type={input.type}
                value={inputValues[id]?.value || ''}
                onChange={(ev) =>
                  onChange(
                    id,
                    ev.target.value,
                    isInputValid(input, ev.target.value)
                  )
                }
              />
              {error && '@Sam TODO style input error'}
            </StackableContainer>
          </li>
        )
      })}
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        margin-top: 20px;
      }
      li:first-child {
        margin-top: 0;
      }
    `}</style>
  </>
)

export default Inputs