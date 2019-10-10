import 'package:flutter/material.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('SIGN UP')),
      body: SignUpForm(),
    );
  }
}

class SignUpForm extends StatefulWidget {
  @override
  _SignUpFormState createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            new Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                new Flexible(
                  child: new TextField(
                      decoration: InputDecoration(
                          hintText: 'First Name',
                          contentPadding: EdgeInsets.all(10))),
                ),
                SizedBox(
                  width: 20.0,
                ),
                new Flexible(
                  child: new TextField(
                      decoration: InputDecoration(
                          hintText: 'Last Name',
                          contentPadding: EdgeInsets.all(10))),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(hintText: 'Password'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(hintText: 'Retype Password'),
              ),
            ),
            Row(
              children: <Widget>[
                Text('Select your gender'),
                Spacer(
                  flex: 1,
                ),
                Radio(
                  value: 0,
                  groupValue: 1,
                  onChanged: (val) {},
                ),
                Text('Male'),
                Radio(
                  value: 1,
                  groupValue: 1,
                  onChanged: (val) {},
                ),
                Text('Female'),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text('I agree to the terms of use'),
                Switch(
                  value: false,
                  onChanged: (val) {},
                )
              ],
            ),
            SizedBox(
              height: 52.0,
              child: RaisedButton(
                child: Text('SIGN UP'),
                onPressed: () {},
              ),
            ),
            FlatButton(
              child: Text('Already a member? SIGN IN'),
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}
