<?php
$CONFIG = array (
  'apps_paths' => 
  array (
    0 => 
    array (
      'path' => '/var/www/html/apps',
      'url' => '/apps',
      'writable' => false,
    ),
    1 => 
    array (
      'path' => '/var/www/html/custom_apps',
      'url' => '/custom_apps',
      'writable' => true,
    ),
  ),
  'memcache.distributed' => '\\OC\\Memcache\\Redis',
  'memcache.local' => '\\OC\\Memcache\\APCu',
  'memcache.locking' => '\\OC\\Memcache\\Redis',
  'redis' => 
  array (
    'host' => 'cache',
    'password' => '',
    'port' => 6379,
  ),
  'instanceid' => 'oclbv7jhwbbo',
  'passwordsalt' => 'xxx',
  'secret' => 'xxx',
  'trusted_domains' => 
  array (
    0 => '192.168.1.123',
    1 => 'nextcloudtest.hwb0307.com',
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'version' => '26.0.2.1',
  'overwritehost' => 'nextcloudtest.hwb0307.com:443',
  'overwriteprotocol' => 'https',
  'overwrite.cli.url' => 'http://nextcloudtest.hwb0307.com:443',
  'dbname' => 'nextcloud',
  'dbhost' => 'db',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbuser' => 'nextcloud',
  'dbpassword' => 'xxxxxxx',
  'installed' => true,
  'enable_previews' => true,
  'enabledPreviewProviders' => 
  array (
    0 => 'OC\\Preview\\Movie',
    1 => 'OC\\Preview\\PNG',
    2 => 'OC\\Preview\\JPEG',
    3 => 'OC\\Preview\\GIF',
    4 => 'OC\\Preview\\BMP',
    5 => 'OC\\Preview\\XBitmap',
    6 => 'OC\\Preview\\MP3',
    7 => 'OC\\Preview\\MP4',
    8 => 'OC\\Preview\\TXT',
    9 => 'OC\\Preview\\MarkDown',
    10 => 'OC\\Preview\\PDF',
    11 => 'OC\\Preview\\MOV',
    12 => 'OC\\Preview\\WEBP',
  ),
  'mail_smtpmode' => 'smtp',
  'mail_smtphost' => 'smtp.qq.com',
  'mail_sendmailmode' => 'smtp',
  'mail_smtpport' => '465',
  'mail_smtpauth' => 1,
  'mail_from_address' => 'hwb2012',
  'mail_domain' => 'qq.com',
  'mail_smtpsecure' => 'ssl',
  'mail_smtpname' => 'hwb2012@qq.com',
  'mail_smtppassword' => 'xxxxxxx',
  'default_phone_region' => 'CN',
  'app_install_overwrite' => 
  array (
    0 => 'documentserver_community',
  ),
);