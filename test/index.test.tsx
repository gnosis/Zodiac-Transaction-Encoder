import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { fireEvent, render, screen } from '@testing-library/react'
import selectEvent from 'react-select-event'
import IndexPage from '../pages/index'

const abiTextJson =
  '[{"inputs":[{"internalType":"contract Executor","name":"_executor","type":"address"},{"internalType":"contract Realitio","name":"_oracle","type":"address"},{"internalType":"uint32","name":"timeout","type":"uint32"},{"internalType":"uint32","name":"cooldown","type":"uint32"},{"internalType":"uint32","name":"expiration","type":"uint32"},{"internalType":"uint256","name":"bond","type":"uint256"},{"internalType":"uint256","name":"templateId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"questionId","type":"bytes32"},{"indexed":true,"internalType":"string","name":"proposalId","type":"string"}],"name":"ProposalQuestionCreated","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVALIDATED","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSACTION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"}],"name":"addProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"addProposalWithNonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"answerExpiration","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"}],"name":"buildQuestion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"executeProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"txIndex","type":"uint256"}],"name":"executeProposalWithIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"executedProposalTransactions","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"executor","outputs":[{"internalType":"contract Executor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"generateTransactionHashData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"templateId","type":"uint256"},{"internalType":"string","name":"question","type":"string"},{"internalType":"address","name":"arbitrator","type":"address"},{"internalType":"uint32","name":"timeout","type":"uint32"},{"internalType":"uint32","name":"openingTs","type":"uint32"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getQuestionId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getTransactionHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"proposalId","type":"string"},{"internalType":"bytes32[]","name":"txHashes","type":"bytes32[]"}],"name":"markProposalAsInvalid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"questionHash","type":"bytes32"}],"name":"markProposalAsInvalidByHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"questionHash","type":"bytes32"}],"name":"markProposalWithExpiredAnswerAsInvalid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minimumBond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract Realitio","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"questionArbitrator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"questionCooldown","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"questionIds","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"questionTimeout","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"expiration","type":"uint32"}],"name":"setAnswerExpiration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"arbitrator","type":"address"}],"name":"setArbitrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bond","type":"uint256"}],"name":"setMinimumBond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"cooldown","type":"uint32"}],"name":"setQuestionCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"timeout","type":"uint32"}],"name":"setQuestionTimeout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"templateId","type":"uint256"}],"name":"setTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"template","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'

const abiText =
  'function oracle() view returns (address)\nfunction setMinimumBond(uint256 bond)'

describe('IndexPage', () => {
  it('Selecting a write function should display its input fields and correct call data', async () => {
    render(<IndexPage />)
    const textArea = screen.getByLabelText('Paste in ABI here')
    fireEvent.change(textArea, { target: { value: abiText } })

    // select function
    await selectEvent.select(
      screen.getByLabelText('Select function to encode'),
      'setMinimumBond'
    )

    const bondInput = screen.getByLabelText('bond (uint256)')
    expect(bondInput).toBeInTheDocument()

    fireEvent.change(bondInput, { target: { value: '344444' } })

    const callData = screen.getByText(
      '0xcd3ef951000000000000000000000000000000000000000000000000000000000005417c'
    )
    expect(callData).toBeInTheDocument()
  })

  it('Selecting a read function should display the corresponding call data', async () => {
    render(<IndexPage />)
    const textArea = screen.getByLabelText('Paste in ABI here')
    fireEvent.change(textArea, { target: { value: abiText } })

    // select function
    await selectEvent.select(
      screen.getByLabelText('Select function to encode'),
      'oracle'
    )

    const readCallData = screen.getByText('0x7dc0d1d0')
    expect(readCallData).toBeInTheDocument()
  })

  it('Selecting a read function from a JSON abi input', async () => {
    render(<IndexPage />)
    const textArea = screen.getByLabelText('Paste in ABI here')
    fireEvent.change(textArea, { target: { value: abiTextJson } })

    // select function
    await selectEvent.select(
      screen.getByLabelText('Select function to encode'),
      'oracle'
    )

    const readCallData = screen.getByText('0x7dc0d1d0')
    expect(readCallData).toBeInTheDocument()
  })
})
