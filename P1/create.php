<?php
header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON
// Mengizinkan permintaan dari domain React yang berjalan di http://localhost:3000
header('Access-Control-Allow-Origin: *');
// Mengizinkan metode HTTP yang diizinkan
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// Mengizinkan header yang diizinkan
header('Access-Control-Allow-Headers: Content-Type, Authorization');
// Reject metode OPTIONS jika terpilih
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
http_response_code(200);
exit;
}
require('connection.php');
// Mengatur header untuk mengindikasikan bahwa respon adalah JSON require('connection.php'); // Koneksi Database dari file connection.php
header('Content-Type: application/json'); 
$response = array(); // Inisialisasi array respons
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $npm = $_POST['npm'];
    $nama = $_POST['nama'];
    $kelas = $_POST['kelas'];
    $sql = "INSERT INTO mahasiswa (npm, nama, kelas) VALUES ('$npm', '$nama', '$kelas')";
    If (mysqli_query($koneksi, $sql)) { $response['status'] = 'success';
    $response['message'] = 'Data berhasil ditambahkan.';
    } else {
    $response['status'] = 'error';
    $response['message'] = 'Error:'. $sql. '<br>' .mysqli_error($koneksi);
    }
}
mysqli_close($koneksi);
echo json_encode($response); // Mengirimkan respon dalam format JSON
?>
