export interface quiz {
    id: number,
    soal: string,
    image?: string,
    options: string[],
    jawaban: number,
    selectedAnswer?: number
}