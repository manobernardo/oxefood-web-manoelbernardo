import axios from "axios";
import React, { useState } from "react";

import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";


import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setdataNascimento] = useState();
    const [fonecelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setqtdEntregasRealizadas] = useState();
    const [valorFrete, setvalorFrete] = useState();
    const [enderecoRua, setenderecoRua] = useState();
    const [enderecoNumero, setenderecoNumero] = useState();
    const [enderecoBairro, setenderecoBairro] = useState();
    const [enderecoCidade, setenderecoCidade] = useState();
    const [enderecoCep, setenderecoCep] = useState();
    const [enderecoUf, setenderecoUf] = useState();
    const [enderecoCompleto, setenderecoCompleto] = useState();
    const [ativo, setativo] = useState();



    function salvar() {

		let entregadorRequest = {
		     nome: nome,
		     cpf: cpf,
             rg: rg,
		     dataNascimento: dataNascimento,
             fonecelular: fonecelular,
             foneFixo: foneFixo,
             qtdEntregasRealizadas: qtdEntregasRealizadas,
             valorFrete: valorFrete,
             enderecoRua: enderecoRua,
             enderecoNumero: enderecoNumero,
             enderecoBairro: enderecoBairro,
             enderecoCidade: enderecoCidade,
             enderecoCep: enderecoCep,
             enderecoUf: enderecoUf,
             enderecoCompleto: enderecoCompleto,
		     ativo: ativo
		     
		}
	
		axios.post("http://localhost:8082/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Entregador.')
             
		})
       
	}

    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)} />


                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)} 
                                    />

                                    </Form.Input>

                                <Form.Input

                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="9.999.999"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                />

                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    >
                                    <InputMask
                                    mask="99/99/9999"
                                    maskChar={null}
                                    placeholder="Ex: 20/03/1985"
                                    value={dataNascimento}
                                    onChange={e => setdataNascimento(e.target.value)}
                                />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'>
                                   <InputMask
                                    mask="(99) 9999.9999"
                                    value={fonecelular}
                                    onChange={e => setFoneCelular(e.target.value)}
                                />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'>
                                    <InputMask
                                    mask="(99) 9999.9999"
                                    value={foneFixo}
                                    onChange={e => setFoneFixo(e.target.value)}
                                />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='QTD de entregas realizadas'>
                                    <InputMask
                                    mask="999"
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setqtdEntregasRealizadas(e.target.value)}
                                />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor por frete'>
                                    <InputMask
                                    mask="999.99"
                                    value={valorFrete}
                                    onChange={e => setvalorFrete(e.target.value)}
                                />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    width={12}
                                    value={enderecoRua}
                                    onChange={e => setenderecoRua(e.target.value)}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Numero'>
                                    <InputMask
                                    mask="999"
                                    value={enderecoNumero}
                                    onChange={e => setenderecoNumero(e.target.value)}
                                />


                                </Form.Input>



                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    value={enderecoBairro}
                                    onChange={e => setenderecoBairro(e.target.value)} />


                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    value={enderecoCidade}
                                    onChange={e => setenderecoCidade(e.target.value)} />

                                <Form.Input

                                    fluid
                                    label='CEP'>
                                    <InputMask
                                    mask="99999-999"
                                    value={enderecoCep}
                                    onChange={e => setenderecoCep(e.target.value)}
                                />

                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label='UF'

                                    placeholder='Selecione'
                                    value={enderecoUf}
                                    onChange={e => setenderecoUf(e.target.value)}
                                >
                                </Form.Select>
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.TextArea
                                    label='Complemento'
                                    value={enderecoCompleto}
                                    onChange={e => setenderecoCompleto(e.target.value)}  >
                                </Form.TextArea>

                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo</label>
                                <Form.Field
                                    control={Radio}
                                    label='Sim'
                                    value='1'
                                    

                                    
                                    
                                />
                                <Form.Field
                                    control={Radio}
                                    label='Não'
                                    value='2'
                                    
                                    
                                />
                                value={ativo}
                                    onChange={e => setativo(e.target.value)}
                                </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-entregador'}>Voltar</Link>
                                
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
