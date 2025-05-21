package com.example.lernkotlin

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.lernkotlin.ui.theme.LernkotlinTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LernkotlinTheme {
                BusinessCard()
            }
        }
    }
}

@Composable
fun BusinessCard() {
    // 💜 Couleur de fond violet clair
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = Color(0xFFE6E6FA) // Lavender
    ) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(24.dp)
        ) {
            // 🖼️ Image plus grande
            Image(
                painter = painterResource(id = R.drawable.me),
                contentDescription = "Avatar",
                modifier = Modifier
                    .size(160.dp) // augmentée
                    .clip(CircleShape)
                    .border(3.dp, Color.Gray, CircleShape)
            )
            Spacer(modifier = Modifier.height(20.dp))

            // 📝 Texte plus grand
            Text("Soukaina Mllouk", fontSize = 28.sp, color = Color.Black)
            Text("Software & Data Engineer", fontSize = 18.sp, color = Color.DarkGray)

            Spacer(modifier = Modifier.height(40.dp))

            // 📞 📧 Contacts
            ContactRow(Icons.Default.Phone, "+212 622498604")
            ContactRow(Icons.Default.Email, "mllouksoukaina0@gmail.com")
        }
    }
}

@Composable
fun ContactRow(icon: ImageVector, info: String) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .padding(vertical = 8.dp)
            .fillMaxWidth(0.8f) // pour s’adapter à l’écran
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color(0xFF3ddc84),
            modifier = Modifier.size(28.dp)
        )
        Spacer(modifier = Modifier.width(12.dp))
        Text(text = info, fontSize = 16.sp)
    }
}

@Preview(showBackground = true, showSystemUi = true, device = "id:pixel_4")
@Composable
fun PreviewCard() {
    LernkotlinTheme {
        BusinessCard()
    }
}
