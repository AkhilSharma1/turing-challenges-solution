import 'package:flutter/material.dart';

class MyAccountPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('SIGN UP')),
      body: Column(
        children: <Widget>[
          Center(
            child: Text('MY ACCOUNT'),
          ),
          Container(
            margin: EdgeInsets.all(16.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                Container(
                  child: SizedBox(
                    height: 56.0,
                    child: RaisedButton(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Center(
                            child: Icon(Icons.av_timer),
                          ),
                          Text('1 Order in Progress'),
                        ],
                      ),
                      onPressed: () {},
                    ),
                  ),
                  margin: EdgeInsets.only(bottom: 16.0),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text('Last Order: 30.12.2014'),
                    Text('ID:c945387433'),
                  ],
                ),
              ],
            ),
          ),
          Divider(
            color: Colors.black38,
          ),
          ListTile(
            leading: Icon(Icons.info),
            title: Text('Payment Information'),
            trailing: Icon(
              Icons.keyboard_arrow_right,
              size: 36.0,
            ),
          ),
          Divider(
            color: Colors.black38,
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('Settings'),
            trailing: Icon(
              Icons.keyboard_arrow_right,
              size: 36.0,
            ),
          ),
        ],
      ),
    );
  }
}
