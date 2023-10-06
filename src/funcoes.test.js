/**
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import { soma, 
        recuperaListaDeTarefasNoLocalStorage, 
        criaElementoTarefaNaListaDeTarefas, 
        pegarValorDeInputTarefa } from "./funcoes";


test('criaElementoTarefaNaListaDeTarefas', () => {
    criaElementoTarefaNaListaDeTarefas('Teste')
    const div = document.getElementById('#div-lista-de-tarefas')
    expect(div.childNodes.length).toBe(1)
})

test('recuperaListaDeTarefasNoLocalStorage', () => {
    const result = recuperaListaDeTarefasNoLocalStorage()
    expect(result).not.toBeNull()
})

test('pegarValorDeInputTarefa', () => {
    expect(pegarValorDeInputTarefa()).toBeCalledTimes(1);
  });




