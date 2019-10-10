import 'package:flutter/material.dart';

class SaveCardDetailsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('PAYMENT INFORMATION')),
      body: Padding(
          padding: const EdgeInsets.all(16.0),
          child:
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text('CARD DETAILS'),
                  Text('Enter your debit or credit card details.'),
                  Form(
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Colors.grey,
                        ),
                        borderRadius: BorderRadius.circular(4.0),
                      ),
                      child: Column(
                        children: <Widget>[
                          Row(
                            children: <Widget>[
                              Expanded(
                                flex: 1,
                                child: Text(

                                  'Card No:'.padLeft(10),
                                ),
                              ),
                              Expanded(
                                flex: 3,
                                child: Text(

                                  'Card No:'.padLeft(10),
                                ),
                              ),                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Expanded(
                                flex: 1,
                                child: Text('Expiry:'.padLeft(10))),
                              Expanded(
                                flex:3,
                                  child: TextField(
                                decoration: InputDecoration(border: InputBorder.none),
                              )),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Expanded(
                                flex: 1,
                                child: Text('CVC Code:'.padLeft(10),),),
                              Expanded(
                                flex:3,
                                  child: TextField(
                                decoration: InputDecoration(border: InputBorder.none),
                              ),),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
           
    );
  }
}
