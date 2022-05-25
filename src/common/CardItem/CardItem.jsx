import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import ChatIcon from '@mui/icons-material/Chat';

import ModalDelete from '../../common/Modals/modalDelete';

import '../../assets/css/CardItem.css';

function CardItem({ id, name, date, author, param, img, linkGoogle, linkPsd, arrayFab, mountMes, arrayAvatar, idColumn}) {

  return (
    <div className="card__item">
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
            <Box sx={{ textAlign: 'right' }}>
                <ModalDelete id={id} idColumn={idColumn}/>
            </Box>
            <CardContent>
                <CardHeader 
                    subheader={
                        <p className='card__item__subheader'>
                            { date ?  date : 'Date'} 
                            <Badge variant="dot" style={{ padding: '0 18px' }}/>
                            Created by <span className="card__item__subheader__weight">{ author ?  author : 'Author'}</span>
                        </p>
                    }
                    title={ name ?  name : 'Name Work' }
                >

                </CardHeader>
                <CardContent className='card__item__body'>
                    {
                        (param && img) ? 
                        (
                            <Box>
                                <Typography className='card__item__body__param' variant="body2" color="text.secondary">
                                    { param }
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    image={ img }
                                    alt="Paella dish"
                                    className='card__item__body__media'
                                />
                            </Box>
                        ) : ''
                    }

                    {
                        (!linkGoogle && !linkPsd ) ?
                        ''
                        : (
                            <Box className='card__item__body__tag' variant="body2" color="text.secondary">
                                {
                                    linkGoogle ?
                                    (<Link className='card__item__tag__link' style={{ display: 'inline-block'}}>
                                        <LinkIcon className='card__item__body__linkicon'></LinkIcon>
                                        <Typography style={{ display: 'inline' }}>{ linkGoogle }</Typography>
                                    </Link>)
                                    : ''
                                }
                                {
                                    linkPsd ?
                                    (<Link className='card__item__tag__link' style={{ display: 'inline-block'}}>
                                        <LinkIcon className='card__item__body__linkicon'></LinkIcon>
                                        <Typography style={{ display: 'inline' }}>{ linkPsd }</Typography>
                                    </Link>)
                                    : ''
                                }
                            </Box>
                        )
                    }
                    <Box variant="body2" color="text.secondary">
                        {
                            arrayFab ? 
                            ( arrayFab.map((data)=>(
                                <Fab className='card__item__fab' variant="extended" size="small" color="primary" aria-label="add">
                                    { data }
                                </Fab>
                                )
                            )) : ''
                        }
                    </Box>
                </CardContent>
                {
                    (parseInt(mountMes) > 0) ?
                    <Box className='card__item__boxchat'>
                        <BadgeUnstyled badgeContent={mountMes} className='card__item__boxchat__badge'>
                            <ChatIcon/>
                        </BadgeUnstyled>
                        <Stack direction="row" spacing={2}>
                            {
                                arrayAvatar.map((data)=>(
                                    <Avatar className='card__item__boxchat__avatar' alt="Remy Sharp" src={data} />
                                ))
                            }
                        </Stack>
                    </Box>
                    : ''
                }
            </CardContent>
        </Card>
    </div>
  )
}

export default CardItem