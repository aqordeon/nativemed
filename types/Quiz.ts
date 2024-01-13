export interface quiz {
    id: number,
    soal: string,
    options: string[],
    jawaban: number,
    selectedAnswer?: number
}