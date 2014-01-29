#pragma strict

var moveSize = 1;
private var play_flag = true;
var clearcount = 0;

function Start () {
	play_flag = true;
	
	GameObject.Find("goal").guiText.text = "clear : " + clearcount;
}

function Update () 
{
	var direction = Vector3.zero;
	var Force : float = 10.0; 

	if(!play_flag) return;
	moveCamera();
	//var k = checkKey();
	//moveTo(k);
	
	direction.x = Input.acceleration.x;
	direction.z = Input.acceleration.y;
	transform.rigidbody.AddForce(direction*Force);
}

function moveCamera()
{
	var pos = transform.position;
	pos.y += 10;
	pos.z -= 10;
	
	Camera.main.transform.position = pos;
}

function checkKey()
{
	
	if(Input.GetKey(KeyCode.UpArrow))
	{
		return "up";
	}
	if(Input.GetKey(KeyCode.DownArrow))
	{
		return "down";
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		return "right";
	}
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		return "left";
	}
	
	
	
	return null;
}

function moveTo(n)
{
	if(n=="up")
	{
		transform.rigidbody.AddForce(0,0,moveSize);
	}
	if(n=="down")
	{
		transform.rigidbody.AddForce(0,0,moveSize * -1);
	}
	if(n=="right")
	{
		transform.rigidbody.AddForce(moveSize,0,0);
	}
	if(n=="left")
	{
		transform.rigidbody.AddForce(moveSize * -1,0,0);
	}
}



function OnCollisionEnter(obj : Collision)
{
	if(obj.gameObject.name == "halo")
	{
		Debug.Log("Goal!!");
		clearcount++;
		GameObject.Find("goal").guiText.text = "clear : " + clearcount;
		
		transform.position.x = 443.9011;
		transform.position.y = 233.723;
		transform.position.z = 323.7516;		
	}

	if(obj.gameObject.name == "buttom1")
	{
	
		transform.position.x = 443.9011;
		transform.position.y = 233.723;
		transform.position.z = 323.7516;
	}
}

