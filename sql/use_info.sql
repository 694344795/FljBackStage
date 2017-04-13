/*
Navicat MySQL Data Transfer

Source Server         : fiveTeamProject
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : fanlestreet

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-04-13 20:47:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for use_info
-- ----------------------------
DROP TABLE IF EXISTS `use_info`;
CREATE TABLE `use_info` (
  `m_id` int(255) NOT NULL AUTO_INCREMENT,
  `m_name` varchar(255) DEFAULT NULL,
  `login_name` varchar(255) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `buil_time` datetime DEFAULT NULL,
  `on_time` datetime DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8815 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of use_info
-- ----------------------------
INSERT INTO `use_info` VALUES ('8802', 'admin', 'xhggg', '超级管理员', '超级管理员', '2017-04-12 08:34:08', '2017-04-12 08:34:11');
INSERT INTO `use_info` VALUES ('8803', 'admin', '213', '超级管理员', '超级管理员', '2017-04-12 08:34:08', '2017-04-12 08:34:11');
INSERT INTO `use_info` VALUES ('8804', null, 'hzm', 'Admin', null, '2017-03-12 20:17:00', '2017-03-12 20:17:00');
