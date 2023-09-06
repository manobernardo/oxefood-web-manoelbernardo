import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormProduto() {

    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100" />


                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    maxLength="100" />

                                <Form.Input

                                    fluid
                                    label='RG'
                                    maxLength="100"
                                >

                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    placeholder="Ex: 20/03/1985"
                                    maxLength="100"
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    maxLength="100"
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'
                                    maxLength="100"
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='QTD de entregas realizadas'
                                    maxLength="100"
                                >
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor por frete'
                                    maxLength="100"
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    width={12}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Numero'
                                    width={2}
                                >


                                </Form.Input>



                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100" />


                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    maxLength="100" />

                                <Form.Input

                                    fluid
                                    label='CEP'
                                    maxLength="100"
                                >

                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label='UF'

                                    placeholder='Selecione'
                                >
                                </Form.Select>
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.TextArea
                                    label='Complemento'  >
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
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
