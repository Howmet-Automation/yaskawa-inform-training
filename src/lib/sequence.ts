export function nextState(feedback:boolean, timedOut:boolean):string {
 return timedOut ? 'Fault — review feedback' : feedback ? 'Continue' : 'Waiting for feedback'
}